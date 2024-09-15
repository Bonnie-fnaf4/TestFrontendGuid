import {PlantRequest} from "@/app/services/plants";
import Modal from "antd/es/modal/Modal";
import Input from "antd/es/input/Input";
import {useEffect, useState} from "react";
import TextArea from "antd/es/input/TextArea";

interface Props {
    mode: Mode;
    values: Plant;
    isModalls: boolean;
    handleCansel: () => void;
    handleCreate: (Request: PlantRequest) => void;
    handleUpdate: (id: string, request: PlantRequest) => void;
}
export enum Mode {
    Create,
    Edit,
}

export const CreateUpdatePlant = ({
    mode,
    values,
    isModalls,
    handleCansel,
    handleCreate,
    handleUpdate,
}: Props) => {
    const [name, SetName] = useState<string>("");
    const [shortDescription, SetShortDescription] = useState<string>("");
    const [price, SetPrice] = useState<number>(1);
    
    useEffect(() => {
        SetName(values.name)
        SetShortDescription(values.shortDescription)
        SetPrice(values.price)
    }, [values])
    
    const handleOnOk = async () => {
        const plantRequest = {name, shortDescription, price};
        
        mode == Mode.Create ? 
            handleCreate(plantRequest) :
            handleUpdate(values.id, plantRequest)
    }
    
    return(
        <Modal
    title={
        mode === Mode.Create ? "Добавить растение" : "Редактировать растенение"
    }
    open={isModalls}
    onOk={handleOnOk}
    onCansel={handleCansel}
    canselText={"Отмена"}
    >
        <div className="plant_modal">
            <Input
                value={name}
                onChange={(e) => SetName(e.target.value)}
                placeholder="Название"
            />
            <TextArea
                value={shortDescription}
                onChange={(e) => SetShortDescription(e.target.value)}
                placeholder="Описание"
            />
            <Input
                value={price}
                onChange={(e) => SetPrice(e.target.value)}
                placeholder="Цена"
            />
        </div>
    </Modal>)
};