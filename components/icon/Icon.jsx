import PropTypes from 'prop-types';

export function Icon({ iconName, color = 'bg-grey-g3', size, additionalClass }) {
  return <div className={`${iconName} ${color} ${size} ${additionalClass}`}></div>;
}

// 명시적으로 나타내기 위해 additionalClass 대신 color, size iconName 따로 뺌
Icon.propTypes = {
  // 아이콘 이름
  iconName: PropTypes.string,
  // 아이콘 색상 = 단색은 회색이 기본이며, 여러색의 경우는 colors=''로 준다
  color: PropTypes.string,
  // 아이콘 사이즈
  size: PropTypes.string,
  // 추가클래스 패딩 등 tw로 제어할 수 있는 영역
  additionalClass: PropTypes.string,
};
