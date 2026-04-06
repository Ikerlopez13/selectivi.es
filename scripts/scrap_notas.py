
import requests
from bs4 import BeautifulSoup
import json
import time

def scrape_region(region_slug, num_pages):
    results = []
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    for page in range(num_pages):
        url = f"https://notasdecorte.es/zona/{region_slug}?page={page}"
        print(f"Scraping {url}...")
        try:
            response = requests.get(url, headers=headers, timeout=10)
            if response.status_code != 200:
                print(f"Failed to load {url} (Status: {response.status_code})")
                break
            
            soup = BeautifulSoup(response.text, 'html.parser')
            rows = soup.select('div.views-row')
            
            if not rows:
                print(f"No rows found on {url}")
                break
                
            for row in rows:
                degree_el = row.select_one('div.titul-list-nombre a, span a[title*="titulación"]')
                uni_el = row.select_one('div.views-field-field-universidad-id a')
                grade_el = row.select_one('div.titul-list-nota-corte-nota')
                
                if degree_el and uni_el and grade_el:
                    degree = degree_el.text.strip()
                    uni = uni_el.text.strip()
                    grade_str = grade_el.text.strip().replace(',', '.')
                    
                    try:
                        grade = float(grade_str)
                    except ValueError:
                        grade = 0.0
                        
                    results.append({
                        "grado": degree,
                        "universidad": uni,
                        "notaCorte2024": grade,
                        "id": f"{degree.lower().replace(' ', '-')}-{uni.lower().replace(' ', '-')}"[:50]
                    })
            
            time.sleep(0.5)
            
        except Exception as e:
            print(f"Error scraping {url}: {e}")
            break
            
    return results

def main():
    regions = {
        "madrid": 70, 
        "cataluna": 70,
        "andalucia": 70
    }
    
    all_data = {}
    for region, pages in regions.items():
        print(f"--- Scraping {region} ---")
        all_data[region] = scrape_region(region, pages)
        print(f"Total degrees found in {region}: {len(all_data[region])}")

    with open('src/data/notas_corte_scraped.json', 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    
    print("Scraping finished. Data saved to src/data/notas_corte_scraped.json")

if __name__ == "__main__":
    main()
