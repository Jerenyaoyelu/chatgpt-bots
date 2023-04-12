import { QuestionCircleOutlined, SendOutlined, SolutionOutlined } from "@ant-design/icons";
import { Input } from "antd";


const IeltsEgb: React.FC = () => {

  const QuesBefore = (
    <div className="flex items-center">
      <QuestionCircleOutlined className="mr-2" />
      作文题目
    </div>
  )

  const AnswerBefore = (
    <div className="flex items-center">
      <SolutionOutlined className="mr-2" />
      你的作文
    </div>
  )

  return (
    <div className="w-full h-full flex rounded-r">
      <div className="flex-1 flex flex-col p-8">
        <div className="flex-1 mb-6">dialog</div>
        <div className="flex w-full">
          <div className="flex-1">
            <Input addonBefore={QuesBefore} className="mb-2" />
            <Input addonBefore={AnswerBefore} />
          </div>
          <div className="w-20 flex items-center justify-center">
            <div className="rounded border-2 w-16 h-16 flex items-center justify-center">
              <SendOutlined style={{ fontSize: '36px' }} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 bg-secondary w-60 text-center rounded-r">side</div>
    </div>
  )
}

export default IeltsEgb;