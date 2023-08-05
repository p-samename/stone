import { Button } from '@components/index';

export function MainContent({ imagePath, title, subTitle, description, buttonTitle, reverseContent = false, bgColor = 'bg-grey-g6' }) {
  return (
    <>
      <div className={`h-max flex items-center ${bgColor} ${reverseContent ? 'mb:flex-col flex-row-reverse' : 'mb:flex-col'}`}>
        <div className="min-w-[350px] w-[100%] pad:w-[50%] web:w-[50%]">
          <img className="w-[100%] text-center pad:h-[50vw] mb:h-[100vw] max-h-[500px] mx-auto object-cover" src={`${imagePath}`} alt="" />
        </div>
        <div className="h-max w-[30%] mb:w-[70%] mb:m-48px mx-auto">
          <p className="text-body1 text-grey-g3 ">{subTitle}</p>
          <p className="text-headLine1 mb-4px">{title}</p>
          <p className="text-body5 mb-24px">{description}</p>
          <Button title={buttonTitle} />
        </div>
      </div>
    </>
  );
}
