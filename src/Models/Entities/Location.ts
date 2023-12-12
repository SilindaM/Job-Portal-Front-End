import { BaseEntity } from "../Common/BaseEntity";

interface Location extends BaseEntity {
    name: string;
    description: string;
}

export default Location;
