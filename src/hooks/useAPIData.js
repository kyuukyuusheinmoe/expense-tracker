import { useEffect, useState } from "react";
import { getAPIData } from "../components/Form/DynamicFormElement/utils";

const useAPIData = (dataSource, watchValue) => {
    const [data, setData] = useState()

    useEffect(()=> {
        const fetchData = async () => {
            try {
                if (dataSource && dataSource.type === "API" && dataSource.url) {
                    const apiData = await getAPIData(dataSource.url);
                    setData(apiData);
                } else if (dataSource && dataSource.items) {
                    if (dataSource.filterCondition) {
                        const {filterValue} = dataSource.filterCondition;
                        setData(()=> dataSource.items.filter (data => data[filterValue] === watchValue))
                    } else {
                        setData(dataSource.items);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dataSource, watchValue])

    return data;   
}

export default useAPIData