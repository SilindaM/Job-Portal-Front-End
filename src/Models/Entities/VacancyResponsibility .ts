import { BaseEntity } from "../Common/BaseEntity";

interface VacancyResponsibility extends BaseEntity {
    name: string;
    description: string;
    vacancyPost: string;
    vacancyPostNavigationId: string | null;
}

export default VacancyResponsibility;
