import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TradeOffDetail } from './TradeOffDetail';
import { CATEGORIES, ALL_TRADE_OFFS, getTradeOff, getCategoryForTradeOff } from '../data/tradeOffs';

const ilOne = CATEGORIES[0];
const tradeOff = ilOne.tradeOffs[0];

describe('TradeOffDetail', () => {
  it('defaults to the slider view at the virtue column', () => {
    render(<TradeOffDetail tradeOff={tradeOff} category={ilOne} />);
    // Slider is rendered in both mobile and desktop branches (one hidden via CSS),
    // so we expect the heading to appear at least once.
    expect(
      screen.getAllByRole('heading', { level: 3, name: tradeOff.columns[3].positionName }).length,
    ).toBeGreaterThan(0);
  });

  it('toggles to the full table', async () => {
    const user = userEvent.setup();
    render(<TradeOffDetail tradeOff={tradeOff} category={ilOne} />);
    await user.click(screen.getByRole('tab', { name: /Full table/i }));
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('shows the genuine-tradeOff pill for genuine tradeOffs', () => {
    const mapped = getTradeOff('IV-G1')!;
    const cat = getCategoryForTradeOff('IV-G1')!;
    render(<TradeOffDetail tradeOff={mapped} category={cat} />);
    expect(screen.getAllByText(/Genuine trade-off/i).length).toBeGreaterThan(0);
  });

  it('renders the category title in the header', () => {
    render(<TradeOffDetail tradeOff={ALL_TRADE_OFFS[0]} category={ilOne} />);
    expect(screen.getByText(ilOne.title)).toBeInTheDocument();
  });
});
