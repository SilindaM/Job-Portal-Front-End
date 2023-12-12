import { BaseEntity } from "../Common/BaseEntity";

interface Vacancy extends BaseEntity {
    vacancyTitle: string;
    vacancySummary: string;
    locationId: string;
    companyId: string;
    categoryId: string;
}

export default Vacancy;