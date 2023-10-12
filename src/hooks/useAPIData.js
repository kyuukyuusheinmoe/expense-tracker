import { useEffect, useState } from "react";
import { getAPIData } from "../components/Form/DynamicFormElement/utils";

const useAPIData = (dataSource) => {
    const [data, setData] = useState()

    useEffect(()=> {
        const fetchData = async () => {
            try {
                if (dataSource && dataSource.type === "API" && dataSource.url) {
                    const apiData = await getAPIData(dataSource.url);
                    setData(apiData);
                } else if (dataSource && dataSource.items) {
                    setData(dataSource.items);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dataSource])

    return data;   
}

export default useAPIData