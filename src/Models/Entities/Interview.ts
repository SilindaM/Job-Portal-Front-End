import { BaseEntity } from "../Common/BaseEntity";

interface Interview extends BaseEntity {
    vacancyId: string | null;
    interviewee: string | null;
    applicationId: string | null;
    date: Date | null;
    status: string;
    companyId: string;
}

export default Interview;
