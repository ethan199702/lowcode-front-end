import BaseTable from "@antd-core/component-pro/BaseTable";
import type { BaseTableColumnProps } from "@antd-core/component-pro/BaseTable/shared";

import { get_user_list } from "@/service/user";

const SystemUser = () => {
  const column: BaseTableColumnProps[] = [
    {
      type: "index",
      title: "序号"
    },
    {
      dataIndex: "user_name",
      title: "用户名"
    },
    {
      dataIndex: "real_name",
      title: "真实姓名"
    },
    {
      dataIndex: "email",
      title: "邮箱"
    },
    {
      dataIndex: "phone_number",
      title: "手机号"
    },
    {
      dataIndex: "create_time",
      title: "创建时间"
    },
    {
      dataIndex: "update_time",
      title: "更新时间"
    }
  ];
  return (
    <BaseTable
      columns={column}
      request={async ({ pageNo, pageSize, ...otherSearchParam }) => {
        const { result } = await get_user_list({
          pageNo,
          pageSize,
          ...otherSearchParam
        });

        return {
          data: result.records || [],
          total: result.total
        };
      }}
    ></BaseTable>
  );
};

export default SystemUser;
