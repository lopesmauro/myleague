import { Trophy, Users, Calendar, MapPin, Clock, Shield, BarChart2, ListChecks } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TableChamp } from "../components/Table"
import Navbar from "../components/Navbar"

const Tournament = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div>
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl font-bold mb-4">Copa StackBlitz 2024</h1>
          <div className="flex flex-wrap gap-6">
            <div className="flex gap-3">    
              <Trophy className="text-green-600" />
              <span>Pontos corridos</span>
            </div>
            <div className="flex gap-3">
              <Shield className="text-green-600" />
              <span>20 times</span>
            </div>
            <div className="flex gap-3">
              <Calendar className="text-green-600" />
              <span>25/12/2004</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">

          <CardComponent title="Classificação" icon={<ListChecks size={20} className="text-green-600" />}>
            <TableChamp />
          </CardComponent>

          <CardComponent title="Próximos Jogos" icon={<Calendar size={20} className="text-green-600" />}>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Time A</span>
                  <span className="text-sm text-gray-500">vs</span>
                  <span className="font-medium">Time B</span>
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <Clock size={14} />
                  <span>20 Mar 2024 - 15:00</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Time C</span>
                  <span className="text-sm text-gray-500">vs</span>
                  <span className="font-medium">Time D</span>
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <Clock size={14} />
                  <span>21 Mar 2024 - 17:00</span>
                </div>
              </div>
            </div>
          </CardComponent>

        </div>

        <CardComponent title="Estatísticas" icon={<BarChart2 size={20} className="text-green-600" />}>
          <h1></h1> 
        </CardComponent>

      </div>
    </div>
  )
}

//TODO: Adicionar butões de funcionalidades, ex: Ver tabela completa, definir resultados
const CardComponent = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) => (
  <Card className="bg-transparent rounded-lg shadow-md p-6 text-white border border-gray-800">
    <CardHeader>
      <div className="flex items-center gap-3">
        {icon}
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
)

export default Tournament
