import { ApiProperty } from "@nestjs/swagger";
import { Article } from "@prisma/client";

export class LoginEntity implements Article {

    @ApiProperty()
    id: number;
    
    @ApiProperty({required: true}) 
    username: string;
    
    @ApiProperty({required: true})
    password: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}


