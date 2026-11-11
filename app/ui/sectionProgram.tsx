import CardProgram from "@/app/ui/cardProgram";

export default function SectionProgram(){

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardProgram />
            <CardProgram />
            <CardProgram />
        </div>
    )
}
