import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {BorderBeam} from "@/components/magicui/border-beam.tsx";
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {GrView} from "react-icons/gr";

export function CourseCard({imgUrl, title, desc}: {
    imgUrl: any,
    title: string,
    desc: string,
}) {
    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <BorderBeam size={200} duration={10} delay={2} colorFrom={`#16423C`}/>
                <CardItem translateZ="60" className="w-full">
                    <img
                        src={imgUrl}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 mt-5"
                >{title}</CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2"
                >
                    {desc}
                </CardItem>
                <CardItem translateZ={'50'} className={`w-full mt-10 flex justify-between items-center gap-2`}>
                    <ShinyButton icon={<GrView size={25} />} text={`View`} className={`bg-darkGreen w-full py-3`}/>
                    <ShinyButton icon={<FaEdit size={25} />} text={`Edit`} className={`bg-darkGreen w-full py-3`}/>
                    <ShinyButton icon={<MdDelete size={25} />} text={`Delete`} className={`bg-darkGreen w-full py-3`}/>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}