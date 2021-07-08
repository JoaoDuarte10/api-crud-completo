import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date;

}

export { User }