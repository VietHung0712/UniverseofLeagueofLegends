import { useFetch } from './useFetch';

export const useChampions = () => {
    return useFetch('https://raw.githubusercontent.com/VietHung0712/universelol_be/refs/heads/main/src/json/champions.json');
}

export const useRegions = () => {
    return useFetch('https://raw.githubusercontent.com/VietHung0712/universelol_be/refs/heads/main/src/json/regions.json');
}

export const useSkins = () => {
    return useFetch('https://raw.githubusercontent.com/VietHung0712/universelol_be/refs/heads/main/src/json/skins.json');
}

export const useRelations = () => {
    return useFetch('https://raw.githubusercontent.com/VietHung0712/universelol_be/refs/heads/main/src/json/relations.json');
}

export const useMaps = () => {
    return useFetch('https://raw.githubusercontent.com/VietHung0712/universelol_be/refs/heads/main/src/json/maps.json');
}
