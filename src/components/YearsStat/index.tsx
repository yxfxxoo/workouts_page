import YearStat from '@/components/YearStat';
import useActivities from '@/hooks/useActivities';
import { INFO_MESSAGE } from '@/utils/const';

interface IYearsStatProps {
  year: string;
  onClick: (year: string) => void;
}

const YearsStat = ({ year, onClick }: IYearsStatProps) => {
  const { years } = useActivities();

  // 1. 優化數組排序邏輯：將 'Total' 加入並把當前年份移到最前
  const sortedYears = ['Total', ...years.filter((y) => y !== year)];
  if (year !== 'Total') {
    sortedYears.unshift(year);
  }

  return (
    <div className="fl w-100-l pb5 pr5-l">
      <section className="pb4" style={{ paddingBottom: '0rem' }}>
        <div style={{ lineHeight: 1.8 }}>
          {INFO_MESSAGE(years.length, year)}
          <br />
          <br />
          在山野間我總能肆無忌憚地笑~
          <p style={quoteStyle}>&ndash;&ndash;余小富</p>
        </div>
      </section>
      <hr color="red" />
      
      {/* 2. 統一渲染邏輯，移除冗餘的 hasOwnProperty 判斷 */}
      {sortedYears.map((y) => (
        <YearStat key={y} year={y} onClick={onClick} />
      ))}
    </div>
  );
};

const quoteStyle: React.CSSProperties = {
  fontWeight: 'bold',
  textAlign: 'right',
  margin: 0, // 修正 p 標籤默認邊距
};

export default YearsStat;
