import { useEffect } from 'react';


const useTitle = title =>{
    useEffect(() =>{
        document.title =`${title}-Doctor`;

    },[title])
}

export default useTitle;