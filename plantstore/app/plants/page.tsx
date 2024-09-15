"use client";
import Button from "antd/es/button/button"
import React, {useEffect, useState} from "react";
import {Plants} from "@/app/components/Plants";
import {createPlant, deletePlant, getAllPlants, PlantRequest, updatePlant} from "@/app/services/plants";
import {CreateUpdatePlant, Mode} from "@/app/components/CreateUpdatePlants";

export default function PlantPage () {
    const [values, setValues] = useState<Plant>({
        name: "",
        shortDescription: "",
        price: 1,
    } as Plant);
    
    
    const [plants, setPlants] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);

    useEffect(() => {
        const getPlants = async () => {
            const plants = await getAllPlants();
            setLoading(false);
            setPlants(plants);
        }

        getPlants();

    }, [])
    
    const handleCreatePlant = async (request: PlantRequest) => {
        await createPlant(request);
        closeModal();
        
        const plants = await getAllPlants();
        setPlants(plants);
    }
    
    const handleDeletePlant = async (id: string) => {
        await deletePlant(id);

        const plants = await getAllPlants();
        setPlants(plants);
    }
    
    const handleUpdatePlant = async (id: string, request: PlantRequest) => {
        await updatePlant(id, request);
        closeModal();

        const plants = await getAllPlants();
        setPlants(plants);
    }
    
    const openModal = () => {
        setMode(Mode.Create);
        setIsModalOpen(true);
    }
    
    const openEditMode = (plant: Plant) => {
        setMode(Mode.Edit);
        setValues(plant);
        setIsModalOpen(true);
    }
    
    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    return(
        <div>
            <Button onClick={openModal}>Добавить расстение</Button>
            
            <CreateUpdatePlant 
                mode={mode}
                values={values}
                isModalls={isModalOpen}
                handleCansel={closeModal}
                handleCreate={handleCreatePlant}
                handleUpdate={handleUpdatePlant}
            />
            
            {loading ? <title>Loading.....</title> : <Plants plants={plants} handleOpen={openEditMode} handleDelete={handleDeletePlant}/>}
        </div>
    )
}