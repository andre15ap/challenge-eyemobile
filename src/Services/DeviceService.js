import { Dimensions } from 'react-native';

const getScreenSize = ()=>{
    return Dimensions.get("screen");
}

const DeviceService = {getScreenSize};

export default DeviceService;