import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export const TableChamp = () => {
    const rankingData = [
        { position: 1, team: "Time A", points: 30, games: 10 },
        { position: 2, team: "Time B", points: 27, games: 10 },
        { position: 3, team: "Time C", points: 25, games: 10 },
        { position: 4, team: "Time D", points: 22, games: 10 },
    ]
    return(
        <Table>
            <TableHeader className="border border-gray-800">
                <TableRow className="border border-gray-800">
                    <TableHead><span className="ml-3">Posição</span></TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Pontos</TableHead>
                    <TableHead>Jogos</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="border border-gray-800">
                {rankingData.map((team) => (
                <TableRow key={team.position} className="border border-gray-800">
                    <TableCell><span className="ml-3">{team.position}º</span></TableCell>
                    <TableCell>{team.team}</TableCell>
                    <TableCell>{team.points}</TableCell>
                    <TableCell>{team.games}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )

}


