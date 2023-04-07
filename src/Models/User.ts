import
{   Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn} from "typeorm"

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({nullable:false})
    name: string

    @Column({nullable:false})
    email: string

    @Column({default: false})
    isAdmin: boolean

    @Column({default: "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"})
    img: string

    @Column({default: false})
    banned: boolean

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'timestamptz' }) // Recommended
    date_time_with_timezone: Date;

}