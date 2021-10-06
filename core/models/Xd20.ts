import { Column, Entity } from "typeorm";

@Entity("xd20", { schema: "stu_mark" })
export class Xd20 {
  @Column("varchar", { primary: true, name: "Column2", length: 255 })
  column2: string;

  @Column("varchar", { name: "Column3", nullable: true, length: 255 })
  column3: string | null;

  @Column("varchar", { name: "Column4", nullable: true, length: 255 })
  column4: string | null;

  @Column("varchar", { name: "Column5", nullable: true, length: 255 })
  column5: string | null;

  @Column("varchar", { name: "Column35", nullable: true, length: 255 })
  column35: string | null;

  @Column("varchar", { name: "Column36", nullable: true, length: 255 })
  column36: string | null;

  @Column("varchar", { name: "Column37", nullable: true, length: 255 })
  column37: string | null;
}
