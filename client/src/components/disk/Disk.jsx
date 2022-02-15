import React, {useEffect} from 'react';
import {getFiles} from "../../actions/file"
import {useDispatch, useSelector} from "react-redux";

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect( () =>{
        dispatch(getFiles(currentDir))
    }, [currentDir])
    
    return (
        <div>
          DISK  
        </div>
    );
};

export default Disk;