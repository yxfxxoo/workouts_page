import YearStat from '@/components/YearStat';
import useActivities from '@/hooks/useActivities';
import { INFO_MESSAGE } from '@/utils/const';

const YearsStat = ({
  year,
  onClick,
}: {
  year: string;
  onClick: (_year: string) => void;
}) => {
  const { years } = useActivities();
  // make sure the year click on front
  let yearsArrayUpdate = years.slice();
  yearsArrayUpdate.push('Total');
  yearsArrayUpdate = yearsArrayUpdate.filter((x) => x !== year);
  yearsArrayUpdate.unshift(year);

  // for short solution need to refactor
  return (
    <div className="fl w-100-l pb5 pr5-l">
      <section className="pb4" style={{ paddingBottom: '0rem' }}>
        <p style={{ lineHeight: 1.8 }}>
          {INFO_MESSAGE(years.length, year)}
          <br />
          <br />
          在山野间我总能肆无忌惮地笑~
          <br />
          <p style={quoteStyle}>&ndash;&ndash;余小富</p>
        </p>
      </section>
      <hr color="red" />
      {yearsArrayUpdate.map((year) => (
        <YearStat key={year} year={year} onClick={onClick} />
      ))}
      {
        // eslint-disable-next-line no-prototype-builtins
        yearsArrayUpdate.hasOwnProperty('Total') ? (
          <YearStat key="Total" year="Total" onClick={onClick} />
        ) : (
          <div />
        )
      }
    </div>
  );
};

const quoteStyle = {
  textAlign: 'right',     // 右對齊，展現落款感
  fontSize: 'bold',     // 粗体
  color: '#666',          // 顏色稍淡，不搶主文焦點
  fontStyle: 'italic',    // 斜體增加文學氣息
  marginTop: '0.5rem'     // 與上方文字保持距離
};

export default YearsStat;
