import {CardTitle} from "@/app/components/Cardtitle";
import Button from "antd/es/button/button"
import Card from "antd/es/card/Card";

interface Props{
    plants: Plant[];
    handleDelete: (id: string) => void;
    handleOpen: (plant: Plant) => void;
}

export const Plants = ({plants, handleDelete, handleOpen}: Props) => {
    return (
        <div className="cards">
            {plants.map((plants : Plant) => (
                <Card key={plants.id}
                      title={<CardTitle price={plants.price} title={plants.name}/>}
                      bordered={false}
                >
                    
                    <p>{plants.shortDescription}</p>
                    <div className={"card__buttoms"}>
                        <Button onClick={() => handleOpen} style={{flex: 1}}>Edit</Button>
                        <Button onClick={() => handleDelete} danger style={{flex: 1}}>Delete</Button>
                    </div>
                </Card>
            ))}
        </div>
    );
};