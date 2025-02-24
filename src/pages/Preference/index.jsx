import { useState } from 'react';
import OnBoardingStep01 from '../../components/molecules/OnBoardingStep01';
import OnBoardingStep02 from '../../components/molecules/OnBoardingStep02';
import OnBoardingStep03 from '../../components/molecules/OnBoardingStep03';
import OnBoardingStep04 from '../../components/molecules/OnBoardingStep04';
import OnBoardingStep05 from '../../components/molecules/OnBoardingStep05';
import OnBoardingStep06 from '../../components/molecules/OnBoardingStep06';
import OnBoardingStep07 from '../../components/molecules/OnBoardingStep07';
import OnBoardingStep08 from '../../components/molecules/OnBoardingStep08';
import OnBoardingStep09 from '../../components/molecules/OnBoardingStep09';
import OnBoardingStep10 from '../../components/molecules/OnBoardingStep10';
import OnBoardingStep11 from '../../components/molecules/OnBoardingStep11';

const Home = () => {
  const [step, setStep] = useState(0);
  const [onBoardingArr, setOnBoardingArr] = useState([]);

  // 다음 단계로 보내주는 함수
  const nextStep = () => {
    setStep(step + 1);
  };

  // 이전 단계로 보내주는 함수
  const beforeStep = () => {
    setStep(step - 1);
  };

  const resetStep = () => {
    setStep(1);
  };

  // 현재 step을 기준으로 배열에 값을 기록하는 함수
  const handleOnBoarding = (item) => {
    const result = [...onBoardingArr];
    result[step] = item;
    setOnBoardingArr(result);
    nextStep();
  };

  // 현재 step을 기준으로 화면에 랜더링될 컴포넌트를 return 해주세요
  // 분기가 나뉘게 되면 이전 step의 값을 참조하여 if문을 이용해 분기를 나눠주세요
  // 각 컴포넌트에는 handleOnBoarding 함수를 넘겨줘 확인 버튼을 누를 때 함께 실행되게 해주세요
  switch (step) {
    case 0:
      return <OnBoardingStep01 nextStep={handleOnBoarding} />;
    case 1:
      return (
        <OnBoardingStep02 nextStep={handleOnBoarding} beforeStep={beforeStep} />
      );
    case 2:
      return (
        <OnBoardingStep03 nextStep={handleOnBoarding} beforeStep={beforeStep} />
      );
    case 3:
      return (
        <OnBoardingStep04 nextStep={handleOnBoarding} beforeStep={beforeStep} />
      );
    case 4:
      return (
        <OnBoardingStep05 nextStep={handleOnBoarding} beforeStep={beforeStep} />
      );
    case 5:
      return (
        <OnBoardingStep06 nextStep={handleOnBoarding} beforeStep={beforeStep} />
      );
    case 6: {
      const choice = onBoardingArr[5];
      return (
        <OnBoardingStep07
          choice={choice}
          nextStep={handleOnBoarding}
          beforeStep={beforeStep}
        />
      );
    }
    case 7:
      return (
        <OnBoardingStep08 nextStep={handleOnBoarding} beforeStep={beforeStep} />
      );
    case 8: {
      const choice = onBoardingArr[7];
      return (
        <OnBoardingStep09
          choice={choice}
          nextStep={handleOnBoarding}
          beforeStep={beforeStep}
        />
      );
    }
    case 9:
      return <OnBoardingStep10 nextStep={handleOnBoarding} />;

    case 10:
      return (
        <OnBoardingStep11
          items={onBoardingArr}
          nextStep={handleOnBoarding}
          beforeStep={beforeStep}
          resetStep={resetStep}
        />
      );
    default:
      return <p>오류가 있습니다 새로고침 해주세요</p>;
  }
};

export default Home;
