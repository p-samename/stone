import { Button } from '@components/index';

export function MainContent({ imagePath, title, subTitle, description, buttonTitle, reverseContent = false, bgColor = 'bg-grey-g6' }) {
  return (
    <>
      <div className={`w-[100%] h-max flex mb:gap-[48px] py-[10vw] items-center ${bgColor} ${reverseContent ? 'mb:flex-col flex-row-reverse' : 'mb:flex-col'}`}>
        <div className="w-[50%] min-w-[350px]">
          <img className="w-[70%] text-center mx-auto" src={`${imagePath}`} alt="" />
        </div>
        <div className="h-max w-[30%] mb:w-[70%] mx-auto">
          <p className="text-body1 text-grey-g3 ">{subTitle}</p>
          <p className="text-headLine1 mb-4px">{title}</p>
          <p className="text-body5 mb-24px">{description}</p>
          <Button title={buttonTitle} />
        </div>
      </div>
    </>
  );
}
