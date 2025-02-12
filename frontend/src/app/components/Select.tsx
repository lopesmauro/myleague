import { CgProfile } from "react-icons/cg"
import { MdOutlineSettings } from "react-icons/md"
import { FiLogOut } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectNavbar() {
  return (
    <Select>
      <SelectTrigger className="text-white border border-gray-800 w-44">
        <SelectValue
          placeholder={
            <div className="flex items-center">
              <CgProfile className="mr-2" />
              <span>Username</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent className="text-white bg-gray-950 border border-gray-800">
        <SelectGroup>
          <SelectLabel>username@gmail.com</SelectLabel>

          <SelectItem value="settings" className="hover:bg-gray-800">
            <div className="flex items-center gap-2">
              <MdOutlineSettings />
              <span>Configurações</span>
            </div>
          </SelectItem>

          <SelectItem value="perfil" className="hover:bg-gray-800">
            <div className="flex items-center gap-2">
              <BsPerson />
              <span>Perfil</span>
            </div>
          </SelectItem>

          <SelectItem value="sair" className="hover:bg-gray-800 text-red-500">
            <div className="flex items-center gap-2">
              <FiLogOut />
              <span>Sair</span>
            </div>
          </SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
