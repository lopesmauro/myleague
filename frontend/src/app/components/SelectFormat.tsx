import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectFormat() {
  return (
    <Select>
      <SelectTrigger className="text-white border border-gray-800 w-44">
        <SelectValue
          placeholder="Selecione o formato"
        />
      </SelectTrigger>
      <SelectContent className="text-white bg-gray-950 border border-gray-800">
        <SelectGroup>
          <SelectItem value="fase_de_grupos" className="hover:bg-gray-800">
            Fase de grupos
          </SelectItem>

          <SelectItem value="pontos_corridos" className="hover:bg-gray-800">
            Pontos corridos
          </SelectItem>

          <SelectItem value="mata_Mata" className="hover:bg-gray-800">
            Mata-mata
          </SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
