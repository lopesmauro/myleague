import { CgProfile } from "react-icons/cg"
import { MdOutlineSettings } from "react-icons/md"
import { FiLogOut } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator
} from "@/components/ui/menubar"
import { Bell } from 'lucide-react'


export function MenubarNavbar() {
  return (
    <Menubar className="border border-gray-800 text-white py-5">
        <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-2 focus:border-zinc-800">
                <CgProfile className="mr-2" />
                <span>Username</span>
            </MenubarTrigger>
            <MenubarContent className="border border-gray-800 bg-gray-950 text-white">
                <div className="px-4 py-2 text-sm text-gray-400">username@gmail.com</div>
                <MenubarSeparator />
                <MenubarItem className="hover:bg-gray-800 flex items-center gap-2 p-2">
                    <MdOutlineSettings />
                    <span>Configurações</span>
                </MenubarItem>
                <MenubarItem className="hover:bg-gray-800 flex items-center gap-2 p-2">
                    <BsPerson />
                    <span>Perfil</span>
                </MenubarItem>
                <MenubarItem className="hover:bg-gray-800 text-red-500 flex items-center gap-2 p-2">
                    <FiLogOut />
                    <span>Sair</span>
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-2 focus:border-zinc-800">
                <Bell className='cursor-pointer h-5 text-green-600'/>
            </MenubarTrigger>
        </MenubarMenu>
    </Menubar>
  )
}

