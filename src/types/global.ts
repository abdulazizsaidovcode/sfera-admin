export interface Global {
    region: RegionOrDistricts[] | null;
    setRegion: (region: RegionOrDistricts[] | null) => void;
    district: RegionOrDistricts[] | null;
    setDistrict: (district: RegionOrDistricts[] | null) => void;
    getMeData: null | any;
    setGetMeData: (data: any | null) => void;
    imgUpload: any | number | null
    setImgUpload: (val: any | number | null) => void;
}

export interface RegionOrDistricts {
    id: number
    name: string
}