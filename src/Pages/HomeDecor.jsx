import React from 'react';
import VRShowcase from '../components/VRShowcase';
import VRCardGrid from '../components/VRCardGrid';
import CalltoAction from '../components/CallToAction'


export default function HomeDecorVR() {
  return (
    <div>
      <VRShowcase />
       <VRCardGrid />
       <CalltoAction/>
      {/* Add model viewer or gallery here */}
    </div>
  );
}
