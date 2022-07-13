import React, { useState } from "react";
import Modal from "./Modal";
import Card from "./Card";
function Services() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [modalLink, setModalLink] = useState('');
    return (
        <div className="container services">
            <h2 className="main-title text-center">SERVICES</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2" onClick={() => {
                            setModalOpen(true);
                            setModalImage("infra.png");
                            setModalTitle("KupenStack");
                            setModalContent("KupenStack is an open-source project that provides Kubernetes-native OpenStack on top of a Kubernetes cluster, in form of containerized Openstack cluster. With a vision of lifecycle management and usage through custom resources in Kubernetes thus abstracting Openstack complexities and automating IaaS use cases.");
                            setModalLink("https://kupenstack.io/")
                        }}>
                            <Card title="Infra" img="infra.png" text="KupenStack is an open-source project that provides Kubernetes-native OpenStack on top of a Kubernetes cluster, in form of containerized Openstack cluster." />
                        </div>
                        <div className="col-md-4 mb-2" onClick={() => {
                            setModalOpen(true);
                            setModalImage("communtion.png");
                            setModalTitle("Magma 5G India");
                            setModalContent("Magma India is a community of collaborators coming from diverse professional backgrounds of academia, research and industry who are passionate towards cultivating an environment of open, collaborative and an integrated ecosystem. The objective is to build an unified platform, where open-source projects related to 5G can be evangelized through research & development and education & advocacy.");
                            setModalLink("https://magmaindia.org/")
                        }}>
                            <Card title="Communication" img="communtion.png" text="Magma India is a community of collaborators who are passionate towards cultivating an environment of open, collaborative and integrated ecosystem." />
                        </div>
                        <div className="col-md-4 mb-2 ">
                            <Card title="Security" img="security.png" text="Cryptography has evolved to address the encryption and decryption of private communications through the internet and computer systems" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="AltReality" img="icons8-virtual-reality-400.png" text="WebAR (or web-based augmented reality) is a digital technology that allows you to easily share AR experiences in the most frictionless way possible i.e. on the browser itself— no app installation required. Below given are 3 easy steps to experience AR on web." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Blockchain" img="blockchain-technology.png" text="Blockchain advances empower direct exchanges in a solid, 
                            straightforward way, baking trust into frameworks that work with the productivity of a distributed organization." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Quantum Computing" img="quntam.png" text="Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers." />
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && <Modal setOpenModal={setModalOpen} img={modalImage} title={modalTitle} content={modalContent} link={modalLink} />}
        </div>
    );
}
export default Services;