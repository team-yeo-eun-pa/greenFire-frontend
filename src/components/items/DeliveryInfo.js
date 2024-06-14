import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { callGetDeliveryAddressesAPI } from '../../apis/AddressAPICalls';
import AddressSelectionModal from './AddressSelectionModal';
import DeliveryAddressModal from './DeliveryAddressModal';

function DeliveryInfo({ form, onChangeHandler }) {
    const dispatch = useDispatch();
    const deliveryAddresses = useSelector(state => state.addressReducer.address);
    const [defaultAddress, setDefaultAddress] = useState(null);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showAddAddressModal, setShowAddAddressModal] = useState(false);

    useEffect(() => {
        dispatch(callGetDeliveryAddressesAPI({}));
    }, [dispatch]);

    useEffect(() => {
        if (deliveryAddresses && deliveryAddresses.length > 0) {
            const ordinaryAddress = deliveryAddresses.find(address => address.isOrdinaryAddress);
            setDefaultAddress(ordinaryAddress || deliveryAddresses[0]);
        }
    }, [deliveryAddresses]);

    const handleShowAddressModal = () => setShowAddressModal(true);
    const handleCloseAddressModal = () => setShowAddressModal(false);

    const handleShowAddAddressModal = () => setShowAddAddressModal(true);
    const handleCloseAddAddressModal = () => setShowAddAddressModal(false);

    const handleSelectAddress = (selectedAddress) => {
        setDefaultAddress(selectedAddress);
        handleCloseAddressModal();
    };

    return (
        <>
            <Card className="mb-4 border-0">
                <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">배송지</div>
                <Card.Body>
                    {defaultAddress ? (
                        <>
                            <p className="fs-4 mt-3">{defaultAddress.deliveryAddressName}</p>
                            <p className="fs-5">{defaultAddress.address} {defaultAddress.addressDetail}</p>
                            <p className="fs-6">{defaultAddress.receiverName} {defaultAddress.contactNumber}</p>
                            <p className="fs-7">배송 요청사항: {defaultAddress.deliveryRequest}</p>
                            <div className="fw-semibold border-bottom border-2 border-dark-subtle p-2"></div>
                            <div className="mt-5 d-flex justify-content-end">
                                <Button variant="outline-success" className="btn-md mx-1"
                                        onClick={handleShowAddressModal}>
                                    배송지 변경
                                </Button>
                            </div>
                        </>
                    ) : (
                        <p>기본 배송지가 설정되지 않았습니다.</p>
                    )}
                </Card.Body>
            </Card>

            <AddressSelectionModal
                show={showAddressModal}
                handleClose={handleCloseAddressModal}
                addresses={deliveryAddresses}
                handleSelect={handleSelectAddress}
                handleDelete={(id) => console.log("Delete address ID:", id)}
                handleEdit={(id) => console.log("Edit address ID:", id)}
                handleAdd={handleShowAddAddressModal}
            />

            <DeliveryAddressModal
                show={showAddAddressModal}
                handleClose={handleCloseAddAddressModal}
            />
        </>
    );
}

export default DeliveryInfo;