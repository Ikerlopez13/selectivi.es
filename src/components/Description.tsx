'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function Description() {
  const [email, setEmail] = useState('')
  const [community, setCommunity] = useState('')

  // Comunidades disponibles (excluyendo Madrid y Cataluña)
  const communities = [
    'Andalucía',
    'Aragón',
    'Asturias',
    'Illes Balears',
    'Canarias',
    'Cantabria',
    'Castilla-La Mancha',
    'Castilla y León',
    'Comunidad Valenciana',
    'Extremadura',
    'Galicia',
    'La Rioja',
    'Región de Murcia',
    'Navarra',
    'País Vasco',
    'Ceuta',
    'Melilla',
  ]

  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    setErr(null)
    setLoading(true)
    const { error } = await supabase.from('waitlist').insert({
      email,
      comunidad: community,
      source: 'madrid-landing-desc'
    })
    setLoading(false)
    if (error) {
      setErr(error.message)
    } else {
      setMsg('¡Gracias! Te avisaremos en cuanto esté disponible.')
      setEmail('')
      setCommunity('')
    }
  }

  return (
    <div className="relative bg-gray-50 rounded-3xl p-6 md:p-8 md:pr-64 shadow-lg overflow-hidden">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-4">
          Tu comunidad aún<br />
          no está disponible?
        </h2>
        <p className="text-gray-600 mb-8">
          Dejanos tu correo y comunidad y<br />
          te avisaremos lo antes posible
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
            required
          />

          <select
            value={community}
            onChange={(e) => setCommunity(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
            required
          >
            <option value="" disabled>
              Tu comunidad autónoma
            </option>
            {communities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {err && <p className="text-sm text-red-600">{err}</p>}
          {msg && <p className="text-sm text-green-700">{msg}</p>}
          <button type="submit" className="w-full bg-[#FFB800] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#ffc835] transition-colors disabled:opacity-60" disabled={loading}>
            {loading ? 'Enviando…' : 'Enviar'}
          </button>
        </form>
      </div>

      {/* Gato completo: oculto en móvil */}
      <div className="hidden md:block absolute right-[-160px] top-0 bottom-0 pointer-events-none">
        <svg width="759" height="1123" viewBox="0 0 759 1123" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
          <path d="M397.702 603.001L404.702 541.001C413.535 381.334 478.402 147.001 667.202 487.001C856.002 827.001 511.535 1052.33 315.702 1122.5L325.702 1019.5V711.501L397.702 603.001Z" fill="#FFC22D"/>
          <path d="M649.168 0.0286965C645.352 -0.219631 641.353 1.13758 637.184 4.34022C616.652 20.1146 586.381 49.1378 561.123 76.2084C548.493 89.7454 537.107 102.804 528.813 113.485C524.667 118.824 521.286 123.578 518.909 127.504C517.72 129.467 516.778 131.232 516.115 132.765C515.562 134.044 515.196 135.186 515.051 136.161C501.651 134.013 462.154 131.849 406.225 139.699C384.212 107.956 350.189 63.7817 319.436 34.1146C304.031 19.2541 289.389 7.97613 277.455 3.76698C271.481 1.6602 266.114 1.29899 261.656 3.22694C257.186 5.16009 253.742 9.34475 251.514 16.0795L251.507 16.1019L251.501 16.1244C242.672 54.2744 225.216 148.437 225.988 220.076L207.584 245.443L207.489 245.575V321.764L207.492 321.79L211.486 358.731C207.904 384.917 211.955 425.556 235.731 462.52C259.538 499.533 303.088 532.812 378.414 544.231L378.427 544.233L378.44 544.235C409.877 547.314 485.533 551.031 536.578 541.229C561.798 537.802 600.827 527.234 636.016 506.656C671.212 486.073 702.628 455.438 712.473 411.86C716.494 398.439 720.413 367.933 719.188 319.924C717.962 271.88 711.586 206.275 694.984 122.661C692.314 97.7287 686.259 61.8971 676.759 35.4301C672.013 22.2075 666.381 11.2431 659.823 5.16834C656.535 2.12262 652.981 0.277038 649.168 0.0286965Z" fill="#FFC22D"/>
          <ellipse cx="19" cy="32.5" rx="19" ry="32.5" transform="matrix(-1 0 0 1 523.988 272.737)" fill="#9D781D"/>
          <ellipse cx="19" cy="32.5" rx="19" ry="32.5" transform="matrix(-1 0 0 1 328.988 272.737)" fill="#9D781D"/>
          <path d="M575.225 418.096C577.863 417.202 580.747 417.392 583.244 418.625C585.742 419.858 587.647 422.032 588.541 424.669C589.435 427.306 589.245 430.191 588.012 432.688C586.779 435.185 584.605 437.09 581.968 437.984C579.782 438.725 577.596 439.466 575.411 440.207C575.282 440.251 575.153 440.295 575.025 440.338L581.409 434.277C565.486 480.401 502.73 498.774 463.579 475.456C463.398 475.372 463.216 475.287 463.034 475.201L469.116 476.077C467.014 476.403 464.913 476.729 462.812 477.055C460.06 477.482 457.251 476.798 455.004 475.154C452.756 473.51 451.253 471.04 450.827 468.288C450.4 465.536 451.084 462.728 452.728 460.48C454.372 458.232 456.841 456.73 459.593 456.303C459.593 456.303 459.593 456.303 459.593 456.303C461.695 455.977 463.796 455.651 465.897 455.325L469.072 454.833L471.978 456.201C472.133 456.274 472.288 456.347 472.443 456.419C506.676 475.105 548.428 461.292 561.898 426.512L563.69 422.007L568.282 420.45C568.411 420.406 568.54 420.363 568.668 420.319C570.854 419.578 573.04 418.837 575.225 418.096Z" fill="#9D781D"/>
          <path d="M747.988 317.737C725.988 299.571 668.988 263.137 616.988 262.737M616.988 262.737C615.655 248.237 603.988 219.737 567.988 221.737C542.988 220.571 486.288 220.237 459.488 228.237C432.688 236.237 431.988 266.237 431.988 280.237C431.988 317.737 435.188 376.337 503.988 374.737C551.322 380.904 640.188 367.137 616.988 262.737Z" stroke="#9D781D" strokeWidth="21" strokeLinecap="round"/>
          <path d="M431.988 282.236C423.822 275.07 405.188 265.036 385.988 282.236M385.988 282.236C389.655 306.07 390.488 356.436 374.488 367.236C348.988 379.07 283.288 396.636 224.488 372.236C210.488 366.427 179.488 268.237 224.488 234.736C271.35 199.849 336.988 221.237 369.988 229.236C369.988 229.236 387.588 235.036 385.988 282.236Z" stroke="#9D781D" strokeWidth="21" strokeLinecap="round"/>
          <path d="M174.892 800.318C306.948 850.453 575.321 821.207 693 800.318L552.739 637C516.099 699.289 309.11 705.999 210.196 701.567C190.35 668.903 139.588 664.536 116.689 666.435C82.9752 653.458 12.6858 633.961 1.23589 659.788C-10.214 685.615 60.7116 698.402 97.6056 701.567C67.0726 721.317 68.9809 755.374 73.7517 769.933C86.7282 834.501 146.586 817.093 174.892 800.318Z" fill="#FFC22D"/>
        </svg>
      </div>
    </div>
  )
}