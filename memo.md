# Microfrontends with React: A Complete Developer's Guide

## What are microfrontends?

- divide a monolithic app into multiple, smaller apps
- each smaller app is responsible for a distinct feature of the product
- no direct communication between each apps

## Why use them? benefits

- Multiple engineering teams can work in isolation
- each smaller app is easier to understand and make changes to

---

- container
  - decides when/where to show each microfrontend

- major categories of integration
  - build-time integration
    - pros
      - easy to setup and understand
    - cons
      - container has to be re-deployed every time MFE is updated
      - tempting to tightly couple the container + MFE together
  - [This course FOCUS on this one!] run-time integration
    - container app fetch MFE.js and execute it at client side
    - pros
      - MFE can be deployed independently at any time
      - different versions of MFE can be deployed and container can decide which one to use
    - cons
      - tooling + setup is far more complicated
  - server integration
    - not focus on this topic this time



