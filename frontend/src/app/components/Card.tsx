import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GiSoccerBall } from "react-icons/gi";


export function CardTounment() {
  return (
    <Card className="w-[350px] bg-transparent border border-gray-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-1"><GiSoccerBall className="text-3xl text-green-600"/><span>Campeonato</span></CardTitle>
        <CardDescription>Description about tournment.</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="default" className="bg-green-600 hover:bg-green-800 text-white">Visualizar</Button>
      </CardFooter>
    </Card>
  )
}
