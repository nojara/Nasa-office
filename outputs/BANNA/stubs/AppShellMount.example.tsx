/**
 * BANNA — example shell mount (NOT runnable here; paste reference only).
 * feat/ds-v1-1 · njr39/Cerebro-core when reachable.
 *
 * - PersistentBrandHeader once at shell root (never keyed by route).
 * - GateKeys sibling, outside WebGL.
 * - Switchables left UNSET.
 */

import { PersistentBrandHeader } from './PersistentBrandHeader';
import { GateKeys } from './GateKeys';
import { SWITCHABLES_UNSET } from './switchables';

export function AppShellMountExample() {
  return (
    <div id="cerebro-shell" data-shell="v1.1">
      <PersistentBrandHeader
        phase="ready"
        switchables={SWITCHABLES_UNSET}
        showInternalWordmarkQa={false}
      />
      {/* <SphereScene /> — do not edit WebGL from BANNA lane */}
      <GateKeys phase="ready" switchables={SWITCHABLES_UNSET} />
    </div>
  );
}
