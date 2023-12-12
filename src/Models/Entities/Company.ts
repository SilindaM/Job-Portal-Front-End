import { BaseEntity } from "../Common/BaseEntity";

interface Company extends BaseEntity {
    name: string;
    summary: string;
    email: string;
    phone: number;
    address: string;
    website: string;
    categoryId: string;
    industryId: string;
    locationId: string;
}

export default Company;
