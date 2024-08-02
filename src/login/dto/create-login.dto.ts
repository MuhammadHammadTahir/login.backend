import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
export class CreateLoginDto {
    
@ApiProperty()
@IsString()
 @IsNotEmpty()
 @IsOptional()
username : string;

@ApiProperty()
@IsString()
 @IsNotEmpty()
 @IsOptional()
password: string;

}

