import { Column, Entity } from "typeorm";

@Entity("kd17", { schema: "stu_mark" })
export class Kd17 {
  @Column("varchar", { primary: true, name: "mssv", length: 255 })
  mssv: string;

  @Column("varchar", { name: "hotenlot", nullable: true, length: 255 })
  hotenlot: string | null;

  @Column("varchar", { name: "ten", nullable: true, length: 255 })
  ten: string | null;

  @Column("varchar", { name: "lop", nullable: true, length: 255 })
  lop: string | null;

  @Column("varchar", { name: "diemtbtl", nullable: true, length: 255 })
  diemtbtl: string | null;

  @Column("varchar", { name: "tctichluy", nullable: true, length: 255 })
  tctichluy: string | null;

  @Column("varchar", { name: "mhtichluy", nullable: true, length: 255 })
  mhtichluy: string | null;
}
