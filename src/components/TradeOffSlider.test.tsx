import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TradeOffSlider } from './TradeOffSlider';
import { ALL_TRADE_OFFS } from '../data/tradeOffs';

const sample = ALL_TRADE_OFFS[0];

describe('TradeOffSlider', () => {
  it('renders the selected column position name', () => {
    render(<TradeOffSlider tradeOff={sample} selectedColumn={3} onSelect={() => { }} />);
    expect(
      screen.getByRole('heading', { level: 3, name: sample.columns[3].positionName }),
    ).toBeInTheDocument();
  });

  it('calls onSelect when a position is clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<TradeOffSlider tradeOff={sample} selectedColumn={3} onSelect={onSelect} />);
    const farExcess = screen.getAllByRole('radio')[0];
    await user.click(farExcess);
    expect(onSelect).toHaveBeenCalledWith(0);
  });

  it('renders all 7 field rows in the vertical stack', () => {
    render(<TradeOffSlider tradeOff={sample} selectedColumn={3} onSelect={() => { }} />);
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('How you arrive here')).toBeInTheDocument();
    expect(screen.getByText('Internal narrative')).toBeInTheDocument();
    expect(screen.getByText('What it produces')).toBeInTheDocument();
    expect(screen.getByText('When it is correct')).toBeInTheDocument();
    expect(screen.getByText('Failure signal')).toBeInTheDocument();
    expect(screen.getByText('The corrective')).toBeInTheDocument();
  });
});
