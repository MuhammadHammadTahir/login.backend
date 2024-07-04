import { ApiProperty } from "@nestjs/swagger";

export class CreateLoginDto {
    
@ApiProperty()
username : string;

@ApiProperty()
password: string;

}

