# CRO-NXS layer motion map v0.3 PROPOSED (fixes Rasma v0_4 QA: shared 36s, weak inner separation)
Base: v0.2 MERGED (all locks unchanged). Loop = 72s master, so every period divides 72 for a seamless loop.
Unique periods per visible layer:
| layer | v0.3 motion | period |
|---|---|---|
| L5+L6 graph yaw | ping-pong ±8° (was continuous 240s) | 72s |
| L7 particle skin | counter ping-pong ∓12°, opposite phase to graph = the inner separation | 36s |
| L1 far dust | 10px lateral ping-pong | 24s |
| L2 floor halo | −6% dim | 18s |
| L3 back rim sweep | .10→.08 | 12s |
| L6 item nodes | −10%α twinkle, random phase | 9s |
| L5 link shimmer | −.03α band | 8s |
| L13 orb glow (NABR) | .75→.85 | 6s |
| L6 core hub | 2 beats, 1.02 | 4s |
| L0 tide, L4 inner dust noise | ride the 72s master (sub-perceptual, alpha/noise only) | 72s |
| L8 shell breathe | OFF (1.003 was invisible; keeps shell a still reference plane) | – |
Inner separation: skin and graph now move against each other; ONE DOF focus on L6 nodes so L4/L7 sit softer (no new DOF value).
05 wordmark: instead of a scrim, WEB to test a small camera azimuth/elevation shift on 05 so CEREBRO lands on clear canvas; measure ≥4.5 every frame. Untested.

## v0.3a (19 Oct, Fakir craft call)
UI layers L9–L12 (labels, pockets/cards/chips, HUD, dock): whole-pixel drift, ≤1px per step, no visible jump (sub-pixel shimmers text and thin strokes).
Sub-pixel only for the orb (L13) and the 3D/background layers L0–L8.

## Units (20 Oct)
All px values are device/render-frame px, not CSS px. No DPR multiply. Pass bar ±1px of the map.
