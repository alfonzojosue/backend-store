import
{   Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    ManyToMany,
    JoinTable} from "typeorm"
import { Product } from "./Products"

@Entity("user")
export class User extends BaseEntity {
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

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}