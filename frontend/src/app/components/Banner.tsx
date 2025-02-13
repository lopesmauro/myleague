import { Medal } from 'lucide-react'

export const Banner = () => {
    return(
        <div className="relative overflow-hidden lg:h-96 md:h-64 sm:h-56 xs:h-36">
            <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div>
                <img
                src="banner.jpg"
                alt="Stadium"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
                />
            </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black opacity-100 via-transparent to-transparent"></div> {/* Fade mais suave */}
            <div className="relative container px-10 flex items-center xs:top-6 sm:top-8 md:top-24 lg:top-32">
            <div className="text-white">
                <div className="flex items-center gap-4 xs:mb-2 mb-5">
                <Medal className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 xs:h-8 sm:h-12 md:h-14 lg:h-16" />
                <h1 className="text-3xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Bem vindo</h1>
                </div>
                <p className="text-base xs:text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl">
                Gerencie seus campeonatos com estilo. Crie, organize e acompanhe torneios de qualquer modalidade esportiva.
                </p>
            </div>
            </div>
      </div>
    )
}