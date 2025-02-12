import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarIcon } from 'lucide-react'
import { SelectFormat } from "./SelectFormat"

export function DialogDemo() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-green-600 hover:bg-green-800 text-white">
          <Plus className="mr-2" /> Criar campeonato
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white sm:max-w-[425px] bg-transparent border border-gray-800">
        <DialogHeader>
          <DialogTitle>Criar campeonato</DialogTitle>
          <DialogDescription>
            Insira informações para criar seu campeonato aqui, clique em criar quando estiver pronto.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" defaultValue="" className="col-span-3 border border-gray-800" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="organizer" className="text-right">
              Organizador
            </Label>
            <Input id="organizer" defaultValue="" className="col-span-3 border border-gray-800" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Início</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="text-gray-600 col-span-3 w-full text-left border border-gray-800">
                <div className="flex items-center justify-around w-full">
                  <span>Escolha a data de início</span>
                  <CalendarIcon className="ml-auto" />
                </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="border border-gray-800" align="start">
                <Calendar mode="single"  />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Término</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="text-gray-600 col-span-3 w-full text-left border border-gray-800">
                  <div className="flex items-center justify-around w-full">
                    <span>Escolha a data de término</span>
                    <CalendarIcon className="ml-auto"/>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="border border-gray-800" align="start">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Formato</Label>
            <SelectFormat />
          </div>

        </div>
        <DialogFooter>
          <Button variant="default" className="bg-green-600 hover:bg-green-800 text-white w-32">Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
