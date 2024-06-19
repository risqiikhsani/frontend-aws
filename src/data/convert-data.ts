import { post_category, post_type } from "./data";

export const getCategoryName = (value: string) => {
    const category = post_category.find(category => category.value === value);
    return category ? category.name : value;
};

export const getTypeName = (value: string) => {
    const type = post_type.find(type => type.value === value);
    return type ? type.name : value;
};
