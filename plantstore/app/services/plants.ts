export interface PlantRequest{
    name: string;
    shortDescription: string;
    price: number;
}

export const getAllPlants = async () => {
    const responce = await fetch("https://localhost:44355/Plant");
    return responce.json()
}

export const createPlant = async (plantRequest: PlantRequest) => {
    await fetch("https://localhost:44355/Plant", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(plantRequest),
    })
}

export const updatePlant = async (id: string, plantRequest: PlantRequest) => {
    await fetch(`https://localhost:44355/Plant/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(plantRequest),
    })
}

export const deletePlant = async (id: string) => {
    await fetch(`https://localhost:44355/Plant/${id}`, {
        method: "DELETE",
    })
}