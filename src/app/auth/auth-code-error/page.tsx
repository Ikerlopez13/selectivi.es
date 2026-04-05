import Link from 'next/link'

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#FFF7E1]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border-2 border-[#FFE199] shadow-xl text-center">
        <h1 className="text-3xl font-black text-[#1F1300] mb-4">Error de autenticación</h1>
        <p className="text-gray-600 mb-8">
          No pudimos verificar tu sesión. Esto puede ocurrir si el enlace ha expirado o ya se ha utilizado.
        </p>
        <Link 
          href="/login"
          className="inline-flex items-center justify-center rounded-xl bg-[#FFB800] px-8 py-3 font-bold text-black shadow-lg hover:scale-[1.02] transition-all"
        >
          Volver a intentarlo
        </Link>
      </div>
    </div>
  )
}
